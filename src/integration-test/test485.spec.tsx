
import { test, expect } from "@playwright/experimental-ct-react";
import App485 from "../example/App485.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App485 />);
  await expect(component).toContainText("Learn React");
});
