
import { test, expect } from "@playwright/experimental-ct-react";
import App10 from "../example/App10.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App10 />);
  await expect(component).toContainText("Learn React");
});
