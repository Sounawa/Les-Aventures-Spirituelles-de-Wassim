#!/bin/bash
cd /home/z/my-project
while true; do
    if ! pgrep -f "next dev" > /dev/null 2>&1; then
        echo "[$(date)] Restarting Next.js dev server..." >> /home/z/my-project/keep-alive.log
        script -q -c "npx next dev --turbopack" /dev/null &
    fi
    sleep 30
done
