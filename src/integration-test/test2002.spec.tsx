
import { test, expect } from "@playwright/experimental-ct-react";
import App2002 from "../example/App2002.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2002 />);
  await expect(component).toContainText("Learn React");
});
