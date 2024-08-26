
import { test, expect } from "@playwright/experimental-ct-react";
import App581 from "../example/App581.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App581 />);
  await expect(component).toContainText("Learn React");
});
