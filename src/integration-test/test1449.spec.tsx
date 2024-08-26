
import { test, expect } from "@playwright/experimental-ct-react";
import App1449 from "../example/App1449.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1449 />);
  await expect(component).toContainText("Learn React");
});
