
import { test, expect } from "@playwright/experimental-ct-react";
import App1995 from "../example/App1995.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1995 />);
  await expect(component).toContainText("Learn React");
});
