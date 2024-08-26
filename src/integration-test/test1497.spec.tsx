
import { test, expect } from "@playwright/experimental-ct-react";
import App1497 from "../example/App1497.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1497 />);
  await expect(component).toContainText("Learn React");
});
