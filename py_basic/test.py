import unittest
import dummy

class Test(unittest.TestCase):
    def test(self):
        result = dummy.Sumofthenumber(123)
        self.assertEqual(result,6)
        self.assertEqual(result,7)
     
unittest.main()