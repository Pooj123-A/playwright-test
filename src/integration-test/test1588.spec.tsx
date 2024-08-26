
import { test, expect } from "@playwright/experimental-ct-react";
import App1588 from "../example/App1588.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1588 />);
  await expect(component).toContainText("Learn React");
});
