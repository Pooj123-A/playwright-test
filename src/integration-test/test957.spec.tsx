
import { test, expect } from "@playwright/experimental-ct-react";
import App957 from "../example/App957.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App957 />);
  await expect(component).toContainText("Learn React");
});
