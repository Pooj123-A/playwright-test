
import { test, expect } from "@playwright/experimental-ct-react";
import App260 from "../example/App260.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App260 />);
  await expect(component).toContainText("Learn React");
});
