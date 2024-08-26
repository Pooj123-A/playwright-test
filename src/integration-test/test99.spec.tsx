
import { test, expect } from "@playwright/experimental-ct-react";
import App99 from "../example/App99.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App99 />);
  await expect(component).toContainText("Learn React");
});
