
import { test, expect } from "@playwright/experimental-ct-react";
import App650 from "../example/App650.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App650 />);
  await expect(component).toContainText("Learn React");
});
