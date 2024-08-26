
import { test, expect } from "@playwright/experimental-ct-react";
import App1236 from "../example/App1236.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1236 />);
  await expect(component).toContainText("Learn React");
});
