import { ErrorRequestHandler } from 'express';
import HttpException from '../Exceptions/Exception';

const middlewareError: ErrorRequestHandler = (err, _req, res, _next) => {
  console.log('err', err);
  if (err.kind === 'ObjectId') return res.status(422).json({ message: 'Invalid mongo id' });
  const { status, message } = err as HttpException;
  res.status(status || 500).json({ message });
};

export default middlewareError;
