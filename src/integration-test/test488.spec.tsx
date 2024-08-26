
import { test, expect } from "@playwright/experimental-ct-react";
import App488 from "../example/App488.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App488 />);
  await expect(component).toContainText("Learn React");
});
