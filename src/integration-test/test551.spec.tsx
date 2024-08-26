
import { test, expect } from "@playwright/experimental-ct-react";
import App551 from "../example/App551.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App551 />);
  await expect(component).toContainText("Learn React");
});
