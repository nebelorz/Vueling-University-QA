using System;
using System.Linq;

namespace Template.Auto.Common {

    internal class Helpers {
        public const string CORRESPONDENCIA = "TRWAGMYFPDXBNJZSQVHLCKE";
        public const string TEST = "TEST";

        public static char GetRandomLetter() {
            const string letters = "abcdefghijklmnopqrstuvwxyz";
            Random random = new Random();
            int num = random.Next(0, letters.Length - 1);
            return letters[num];
        }

        public static string GetRandomString(int length) {
            const string letters = "abcdefghijklmnopqrstuvwxyz";
            Random random = new Random();
            var chars = Enumerable.Range(0, length).Select(x => letters[random.Next(0, letters.Length)]);
            return new string(chars.ToArray());
        }

        public static char GetDNILetter(string dni) {
            int n;

            if ((dni == null) || (!int.TryParse(dni.Substring(0, 8), out n)))
            {
                throw new ArgumentException("DNI should be 8 digits");
            }

            return CORRESPONDENCIA[n % 23];
        }

        public static string GetRandomDNIDigits() {
            const string digits = "0123456789";
            Random random = new Random();
            var chars = Enumerable.Range(0, 8)
                .Select(x => digits[random.Next(0, digits.Length)]);
            return new string(chars.ToArray());
        }

        public static string GetRandomDNI() {
            string dniDigits = GetRandomDNIDigits();
            char dniLetter = GetDNILetter(dniDigits);
            string dni = dniDigits + dniLetter.ToString();
            return dni;
        }

        public static int GetRandomNumberBetween(int start, int end) {
            Random random = new Random();
            int randomNumber = random.Next(start, end);
            return randomNumber;
        }

        public static string GenerateFirstName(int length) {
            string FirstName = TEST + GetRandomString(length);
            return FirstName;
        }

        public static string GenerateLastName(int length) {
            string LastName = TEST + GetRandomString(length);
            return LastName;
        }

        public static string GenerateEmail() {
            string email = $"{TEST}_{GetRandomString(6)}@test.com";
            return email;
        }

        public static int GetRandomPhoneNumber() {
            Random random = new Random();
            int randomPhoneNumber = random.Next(10000000, 99999999);
            return randomPhoneNumber;
        }
    }
}