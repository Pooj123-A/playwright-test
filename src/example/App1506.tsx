
import { test, expect } from "@playwright/experimental-ct-react";
import App1506 from "./App1506.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1506 />);
  await expect(component).toContainText("Learn React");
});
