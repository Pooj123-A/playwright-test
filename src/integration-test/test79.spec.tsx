
import { test, expect } from "@playwright/experimental-ct-react";
import App79 from "../example/App79.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App79 />);
  await expect(component).toContainText("Learn React");
});
