
import { test, expect } from "@playwright/experimental-ct-react";
import App1367 from "../example/App1367.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1367 />);
  await expect(component).toContainText("Learn React");
});
