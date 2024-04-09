import React from 'react';
import "./queue.css"

export function Queue() {
  return (
    <main class="container-fluid text-center">
        <table class="table table-light table-borderless" id="queueTable">
            <thead class="table-light">
                <tr>
                    <th>Name</th>
                    <th>Subject</th>
                    <th>Question</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody id="queue"></tbody>
        </table>

        <hr/>

        <div id="picture"></div>
    </main>
  );
}