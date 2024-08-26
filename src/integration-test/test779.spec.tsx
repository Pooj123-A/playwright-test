
import { test, expect } from "@playwright/experimental-ct-react";
import App779 from "../example/App779.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App779 />);
  await expect(component).toContainText("Learn React");
});
