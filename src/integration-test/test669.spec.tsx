
import { test, expect } from "@playwright/experimental-ct-react";
import App669 from "../example/App669.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App669 />);
  await expect(component).toContainText("Learn React");
});
