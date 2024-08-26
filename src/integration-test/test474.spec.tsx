
import { test, expect } from "@playwright/experimental-ct-react";
import App474 from "../example/App474.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App474 />);
  await expect(component).toContainText("Learn React");
});
