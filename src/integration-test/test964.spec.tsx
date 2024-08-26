
import { test, expect } from "@playwright/experimental-ct-react";
import App964 from "../example/App964.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App964 />);
  await expect(component).toContainText("Learn React");
});
