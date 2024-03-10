import java.util.Random;

public class APS1 {
    static int[] generateTable(int n) {
        int[] arr = new int[n];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = 0;
        }
        return arr;
    }

    static int findLinear(int[] a, int v) {
        int rtn = 0;
        for (int i = 0; i < a.length; i++) {
            if (a[i] == v)
                break;
        }
        return rtn;
    }

    static int findBinary(int[] a, int l, int r, int v) {
        while (l <= r) {
            int mid = (l + r) / 2;
            if (a[mid] == v) {
                return mid;
            } else if (a[mid] > v) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return -1;
    }

    static long timeLinear(int n) {
        Random random = new Random();
        long sum = 0;
        int[] table = generateTable(n);
        for (int i = 0; i < 1000; i++) {
            int randomInt = random.nextInt() % n;

            long time = System.nanoTime();
            findLinear(table, randomInt);
            sum += (System.nanoTime() - time);
        }

        return (sum / 1000);
    }

    static long timeBinary(int n) {
        Random random = new Random();
        long sum = 0;
        int[] table = generateTable(n);
        for (int i = 0; i < 1000; i++) {
            int randomInt = random.nextInt() % n;

            long time = System.nanoTime();
            findBinary(table, 0, table.length - 1, randomInt);
            sum += (System.nanoTime() - time);
        }

        return (sum / 1000);
    }

    public static void main(String[] args) {
        System.out.printf("%10s|%10s|%10s%n", "n", "linearno", "binarno");
        System.out.printf("%10s+%10s+%10s%n", "-".repeat(10), "-".repeat(10), "-".repeat(10));
        long[] linear = new long[100];
        long[] binary = new long[100];
        long maxValue = 0;
        for (int n = 1000; n < 100000; n += 1000) {
            int i = (n / 1000);
            long timeLinear = timeLinear(n);
            long timeBinary = timeBinary(n);
            linear[i] = timeLinear;
            binary[i] = timeBinary;
            maxValue = Math.max(maxValue, timeLinear);
            maxValue = Math.max(maxValue, timeBinary);
            System.out.printf("%9d |%9d |%9d%n", n, timeLinear, timeBinary);
        }

        StdDraw.setCanvasSize(1000, 1000);
        StdDraw.setPenRadius(0.005);
        StdDraw.setPenColor(StdDraw.BLACK);
        StdDraw.setXscale(-5, 100);
        StdDraw.setYscale(-(maxValue / 20), maxValue);
        StdDraw.line(0, 0, 0, maxValue);
        StdDraw.line(0, 0, 100, 0);
        StdDraw.setPenColor(StdDraw.BOOK_RED);
        for (int x = 0; x < 99; x++) {
            StdDraw.line((double) x, (double) linear[x], (double) (x + 1), (double) linear[x + 1]);
        }

        StdDraw.setPenColor(StdDraw.CYAN);
        for (int x = 0; x < 99; x++) {
            StdDraw.line((double) x, (double) binary[x], (double) (x + 1), (double) binary[x + 1]);
        }
    }
}