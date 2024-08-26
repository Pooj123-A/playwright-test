
import { test, expect } from "@playwright/experimental-ct-react";
import App1800 from "../example/App1800.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1800 />);
  await expect(component).toContainText("Learn React");
});
