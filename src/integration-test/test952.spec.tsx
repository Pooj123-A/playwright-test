
import { test, expect } from "@playwright/experimental-ct-react";
import App952 from "../example/App952.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App952 />);
  await expect(component).toContainText("Learn React");
});
