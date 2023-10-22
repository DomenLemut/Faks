import random
import sys
import math

def generate_random_pairs(length, num_pairs):
    for _ in range(num_pairs):
        first_number = random.randint(0, length)
        second_number = random.randint(0, int(math.sqrt(length)))
        print(f"{first_number} {second_number}")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        sys.exit(1)

    length = int(sys.argv[1])
    num_pairs = int(sys.argv[2])

    print(length)
    print (num_pairs)

    generate_random_pairs(length, num_pairs)
