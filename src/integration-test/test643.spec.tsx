
import { test, expect } from "@playwright/experimental-ct-react";
import App643 from "../example/App643.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App643 />);
  await expect(component).toContainText("Learn React");
});
