
import { test, expect } from "@playwright/experimental-ct-react";
import App596 from "../example/App596.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App596 />);
  await expect(component).toContainText("Learn React");
});
