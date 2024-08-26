
import { test, expect } from "@playwright/experimental-ct-react";
import App7 from "../example/App7.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App7 />);
  await expect(component).toContainText("Learn React");
});
