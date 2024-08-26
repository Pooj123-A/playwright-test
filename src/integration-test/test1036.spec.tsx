
import { test, expect } from "@playwright/experimental-ct-react";
import App1036 from "../example/App1036.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1036 />);
  await expect(component).toContainText("Learn React");
});
