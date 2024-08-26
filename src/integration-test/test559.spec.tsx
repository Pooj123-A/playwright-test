
import { test, expect } from "@playwright/experimental-ct-react";
import App559 from "../example/App559.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App559 />);
  await expect(component).toContainText("Learn React");
});
