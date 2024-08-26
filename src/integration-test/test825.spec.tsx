
import { test, expect } from "@playwright/experimental-ct-react";
import App825 from "../example/App825.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App825 />);
  await expect(component).toContainText("Learn React");
});
