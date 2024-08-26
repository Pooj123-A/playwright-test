
import { test, expect } from "@playwright/experimental-ct-react";
import App736 from "../example/App736.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App736 />);
  await expect(component).toContainText("Learn React");
});
