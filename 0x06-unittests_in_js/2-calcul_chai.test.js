const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('number', () => {
      expect(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('numbers', () => {
      expect(calculateNumber('SUM', 1.0, 3.0), 4);
    });

    it(' numbers', () => {
      expect(calculateNumber('SUM', -5, -5), -10);
    });

    it('0 and 0', () => {
      expect(calculateNumber('SUM', 0.0, 0.0), 0);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it('numbers', () => {
      expect(calculateNumber('SUBTRACT', 4.5, 1.5), 3.0);
    });

    it('numbers', () => {
      expect(calculateNumber('SUBTRACT', 2.8, 1.8), 1.0);
    });

    it('numbers', () => {
      expect(calculateNumber('SUBTRACT', -5, -3), -2);
    });

    it('0 and 0', () => {
      expect(calculateNumber('SUBTRACT', 0.0, 0.0), 0);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('numbers', () => {
      expect(calculateNumber('DIVIDE', -4.0, -2.0), 2.0);
    });

    it('numbers', () => {
      expect(calculateNumber('DIVIDE', 9.0, 3.0), 3.0);
    });

    it('0 and number', () => {
      expect(calculateNumber('DIVIDE', 0.0, 5.0), 0);
    });

    it('number and 0', () => {
      expect(calculateNumber('DIVIDE', 5.0, 0), 'Error');
    });

    it('0 and 0', () => {
      expect(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
    });
  });
});
