
import { test, expect } from "@playwright/experimental-ct-react";
import App1526 from "../example/App1526.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1526 />);
  await expect(component).toContainText("Learn React");
});
