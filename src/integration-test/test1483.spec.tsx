
import { test, expect } from "@playwright/experimental-ct-react";
import App1483 from "../example/App1483.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1483 />);
  await expect(component).toContainText("Learn React");
});
