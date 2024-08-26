
import { test, expect } from "@playwright/experimental-ct-react";
import App1400 from "../example/App1400.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1400 />);
  await expect(component).toContainText("Learn React");
});
