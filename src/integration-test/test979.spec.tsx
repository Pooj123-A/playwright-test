
import { test, expect } from "@playwright/experimental-ct-react";
import App979 from "../example/App979.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App979 />);
  await expect(component).toContainText("Learn React");
});
