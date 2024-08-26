
import { test, expect } from "@playwright/experimental-ct-react";
import App1416 from "../example/App1416.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1416 />);
  await expect(component).toContainText("Learn React");
});
