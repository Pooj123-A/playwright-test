
import { test, expect } from "@playwright/experimental-ct-react";
import App1426 from "../example/App1426.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1426 />);
  await expect(component).toContainText("Learn React");
});
