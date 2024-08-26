
import { test, expect } from "@playwright/experimental-ct-react";
import App1822 from "../example/App1822.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1822 />);
  await expect(component).toContainText("Learn React");
});
