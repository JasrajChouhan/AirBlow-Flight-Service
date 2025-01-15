import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

const { combine, timestamp, printf, errors } = winston.format;

// Define the log format
const logFormat = printf(({ timestamp, level, message, stack }) => {
  return `${timestamp} [${level}]: ${stack || message}`;
});


// daily rotate log file
new DailyRotateFile({
  filename: 'logs/%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  maxSize: '20m',
  maxFiles: '14d',
});

// Create the logger instance
const logger = winston.createLogger({
  level: 'info', // Default log level
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    errors({ stack: true }),
    logFormat
  ),
  transports: [
    new winston.transports.Console({
      format: combine(
        winston.format.colorize(),
        logFormat
      ),
    }),
    new winston.transports.File({
      filename: 'logs/app.log',
      level: 'info',
    }),
  ],
});


logger.exceptions.handle(new winston.transports.Console(), new winston.transports.File({ filename: 'logs/exceptions.log' }));
process.on('unhandledRejection', (ex) => {
  throw ex;
});

export default logger;
