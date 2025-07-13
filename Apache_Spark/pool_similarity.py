import json

def jaccard(list1, list2):
    s1, s2 = set(list1), set(list2)
    return len(s1 & s2) / len(s1 | s2) if (s1 or s2) else 0.0

def time_compatible(delivery_time, expires_at):
    from datetime import datetime
    dt = datetime.fromisoformat(delivery_time.replace("Z","+00:00"))
    et = datetime.fromisoformat(expires_at.replace("Z","+00:00"))
    return abs((dt - et).total_seconds()) < 1800  # ±30 min
