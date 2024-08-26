
import { test, expect } from "@playwright/experimental-ct-react";
import App717 from "../example/App717.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App717 />);
  await expect(component).toContainText("Learn React");
});
