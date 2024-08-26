
import { test, expect } from "@playwright/experimental-ct-react";
import App675 from "../example/App675.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App675 />);
  await expect(component).toContainText("Learn React");
});
