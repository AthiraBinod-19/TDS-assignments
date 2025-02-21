const fs = require('fs');

// Read the file
fs.readFile('q-clean-up-student-marks.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // Split the data into lines
    const lines = data.split('\n');

    // Use a Set to store unique student IDs
    const uniqueStudentIds = new Set();

    // Process each line
    lines.forEach(line => {
        // Use a regex to extract the student ID before "Marks"
        const match = line.match(/- (\w+)(?=Marks)/); // Matches the format '- STUDENT_ID'
        if (match && match[1]) {
            const studentId = match[1]; // The student ID
            uniqueStudentIds.add(studentId); // Add to the set (duplicates are ignored)
        }
    });

    // Count the number of unique student IDs
    const uniqueCount = uniqueStudentIds.size;

    // Print the result
    console.log(`The number of unique students is: ${uniqueCount}`);
});
