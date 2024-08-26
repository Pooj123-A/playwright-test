
import { test, expect } from "@playwright/experimental-ct-react";
import App800 from "../example/App800.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App800 />);
  await expect(component).toContainText("Learn React");
});
