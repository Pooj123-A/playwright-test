
import { test, expect } from "@playwright/experimental-ct-react";
import App547 from "../example/App547.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App547 />);
  await expect(component).toContainText("Learn React");
});
